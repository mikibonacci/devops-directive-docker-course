import os, copy

from pgsu import PGSU
from pgsu import DEFAULT_DSN as DEFAULT_DBINFO

db_url = os.getenv('DATABASE_URL', DEFAULT_DBINFO['host'])
db_pwd = os.getenv('DATABASE_PWD', DEFAULT_DBINFO['password'])

dsn = copy.deepcopy(DEFAULT_DBINFO)

dsn['host'] = db_url
dsn['password'] = db_pwd

def setup_db(dsn = dsn):
    try:
        pgsu_db = PGSU(dsn=dsn)
    except Exception as e:
        print(f"Error in connecting to the db: {e}")
        return None
    return pgsu_db

pgsu_db = setup_db(dsn)

def get_time(pgsu_db = pgsu_db):
    query = "SELECT NOW() as now;"
    try:
        result = str(pgsu_db.execute(query)[0][0])
    except Exception as e:
        print(f"Error in getting the time from the db: {e}")
        return None
    return result