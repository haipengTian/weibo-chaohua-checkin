FROM node:22-slim AS frontend
WORKDIR /build/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY frontend/ ./
RUN npm run build

FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1 \
    TZ=Asia/Shanghai

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 用通配符复制全部源码模块, 避免新增 .py (如 auth.py) 后忘记加进 COPY 导致
# ModuleNotFoundError: No module named 'xxx'
COPY *.py ./
COPY static ./static
COPY --from=frontend /build/static/portal/components ./static/portal/components
COPY LICENSE NOTICE.md ./
COPY licenses ./licenses

# 随面板版本发布麦麦插件；提取时只需 docker create / docker cp。
COPY integrations/maibot/_manifest.json integrations/maibot/config.py integrations/maibot/plugin.py LICENSE /app/integrations/maibot/

EXPOSE 8787

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8787"]
