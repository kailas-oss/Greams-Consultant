import sys
import pymysql

pymysql.install_as_MySQLdb()

# Patch Django's MySQL backend version check for PyMySQL compatibility
def patch_mysql_version_check():
    try:
        import MySQLdb
        # Upgrade version to pass Django's check
        MySQLdb.version_info = (2, 2, 7, 'final', 0)
        MySQLdb.__version__ = '2.2.7'
    except Exception:
        pass

patch_mysql_version_check()
