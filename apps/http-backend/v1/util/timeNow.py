from datetime import datetime, timezone, timedelta

IST = timezone(timedelta(hours=5, minutes=30))

def getCurrentDateTime():
    return datetime.now(IST)