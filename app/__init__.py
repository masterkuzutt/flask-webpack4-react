import logging
import os 

from flask import Flask, request


# def create_app(config_class=Config):
def create_app():
    app = Flask(__name__)

    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    return app

