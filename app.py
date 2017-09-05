from flask import Flask, send_file
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

STATIC_URL = '/static/'
STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static'))
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

app = Flask(__name__)

@app.route("/")
def index():
  return send_file('index.html')

@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404

@app.errorhandler(500)
def server_error(e):
    """Return custom 500 error."""
    return '500 status error', 500

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=80)
