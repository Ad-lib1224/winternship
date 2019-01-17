# winternship

Setup instructions
1. Check that python, npm, and pip are all installed:
 	* `python --version`
 	* `npm --version`
 	* `pip --version`
2. Install node modules: `npm install`
3. Build frontend with webpack: `npm run watch` <-- changing files in the client folder will automatically trigger a rebuild
4. In a new terminal tab: Create a virtual environment for python
	* Install venv: `pip install virtualenv`
	* Create a virtual environment: `virtualenv env` OR `python3 -m venv env` (if on python 3)
	* Start the virtual env: `source env/bin/activate`
4. Inside virtual env: Install flask: `pip install flask` and `pip install flask_cors`
5. Start the server: `python server/server.py`
7. Go to `localhost:5000` in your web browser