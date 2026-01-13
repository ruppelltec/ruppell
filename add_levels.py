import json
import random

levels = ["Básico", "Intermedio", "Avanzado"]

with open("src/data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for category in data["categories"]:
    if "courses" in category:
        for course in category["courses"]:
            # Assign random level if not present
            if "level" not in course:
                course["level"] = random.choice(levels)

with open("src/data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print("Levels added successfully!")
