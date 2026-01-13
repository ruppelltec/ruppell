import json
import random

file_path = '/Users/steban/Projects/personal/ruppell/src/data.json'

with open(file_path, 'r') as f:
    data = json.load(f)

for category in data['categories']:
    cat_id = category['id']
    for course in category['courses']:
        course['price'] = random.randint(20, 200) # Price between 20 and 200
        course['duration'] = round(random.uniform(2.0, 40.0), 1) # Duration between 2 and 40 hours
        course['categoryId'] = cat_id

with open(file_path, 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Updated data.json")
