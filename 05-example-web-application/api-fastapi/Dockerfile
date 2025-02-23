FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Create a non-root user (Common for security reasons)
RUN useradd -m fastapi

# Use non-root user (Common for security reasons)
# Use --chown on COPY commands to set file permissions
USER fastapi

# Copy remaining source code AFTER installing dependencies. 
# Again, copy only the necessary files
COPY --chown=fastapi:fastapi . .

# Indicate expected port
EXPOSE 8000

CMD ["fastapi", "run", "main.py"]