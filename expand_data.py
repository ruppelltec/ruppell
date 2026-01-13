import json
import random
import uuid

# Load data
with open('/Users/steban/Projects/personal/ruppell/src/data.json', 'r') as f:
    data = json.load(f)

current_categories = {c['title'] for c in data['categories']}
nests = data['nests']

# Experts pool for random assignment
experts = [e['name'] for e in data['experts']] + ["Expert Placeholder", "Dr. Smith", "Prof. Doe"]

# Function to generate mock courses
def generate_courses(category_id, category_title, count=5):
    courses = []
    topics = ["Fundamentos", "Avanzado", "Masterclass", "Taller Práctico", "Introducción", "Experto en"]
    
    for i in range(count):
        course_id = str(uuid.uuid4())
        topic = random.choice(topics)
        title = f"{topic} {category_title} {i+1}"
        
        courses.append({
            "id": course_id,
            "title": title,
            "popularity": round(random.uniform(3.5, 5.0), 1),
            "expert": random.choice(experts),
            "image": f"https://picsum.photos/200/185?random={random.randint(100, 999)}",
            "price": random.randint(20, 200),
            "duration": round(random.uniform(2.0, 50.0), 1),
            "categoryId": category_id
        })
    return courses

# Iterate nests and add missing categories
added_count = 0
for nest in nests:
    if nest['title'] not in current_categories:
        print(f"Adding category: {nest['title']}")
        
        # Create new category ID (or use nest ID if appropriate, but keeping distinct for safety as per existing structure)
        # Actually, let's just generate a new one to match the 'categories' schema which seems independent
        new_cat_id = str(uuid.uuid4())
        
        new_category = {
            "id": new_cat_id,
            "title": nest['title'],
            "description": nest['description'],
            "courses": generate_courses(new_cat_id, nest['title'], count=random.randint(4, 8))
        }
        
        data['categories'].append(new_category)
        added_count += 1

# Save back
with open('/Users/steban/Projects/personal/ruppell/src/data.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Successfully added {added_count} new categories.")
