import sys

from flask import render_template, flash, redirect, url_for, request, current_app, g
from app.main import bp



@bp.route('/', methods=['GET', 'POST'])
@bp.route('/index', methods=['GET', 'POST'])
def index():
    return render_template('index.html')
