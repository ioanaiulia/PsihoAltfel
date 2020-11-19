import os
import argparse

def getCommitMessage():
    parser = argparse.ArgumentParser(description="Commit message")
    parser.add_argument("message", action="store",  type=str, help="message for commit action", nargs="+")
    arg = parser.parse_args()
    return arg.message

def push(message):
    os.system('git add .')
    cmd = 'git commit -m "' + getStringFromList(message)  + '"'
    os.system(cmd)
    os.system('git push origin master')

def start():
    message = getCommitMessage()
    push(message)

def getStringFromList(list):
    string = ""
    for s in list:
        string = string + s + " "
    return string

start()