dict = {}

def get_user(email):
    email_data = {dict[username]['email']: dict[username] for username in dict}
    
    if email in email_data:
        return email_data[email]
    else:
        return None

def find_user(string, char):
    if char == 'u':
        return string in dict
    
    elif char == 'e':
        for user_info in dict.values():
            if user_info['email'] == string:
                return True
        return False

def store_user_details(user_info):
    username = user_info["username"]
    dict[username] = user_info
