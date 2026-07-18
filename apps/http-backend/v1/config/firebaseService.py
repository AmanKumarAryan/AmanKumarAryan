import firebase_admin
from firebase_admin import credentials
from v1.config.setting import setting

firebase_credentials = {
    "type": setting.FIREBASE_TYPE,
    "project_id": setting.FIREBASE_PROJECT_ID,
    "private_key_id": setting.FIREBASE_PRIVATE_KEY_ID,
    "private_key": setting.FIREBASE_PRIVATE_KEY.replace("\\n", "\n"),
    "client_email": setting.FIREBASE_CLIENT_EMAIL,
    "client_id": setting.FIREBASE_CLIENT_ID,
    "auth_uri": setting.FIREBASE_AUTH_URI,
    "token_uri": setting.FIREBASE_TOKEN_URI,
    "auth_provider_x509_cert_url": setting.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": setting.FIREBASE_CLIENT_X509_CERT_URL,
    "universe_domain": setting.FIREBASE_UNIVERSE_DOMAIN,
}

cred = credentials.Certificate(firebase_credentials)
firebase_admin.initialize_app(cred)