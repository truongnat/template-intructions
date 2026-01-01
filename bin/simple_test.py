import os
from dotenv import load_dotenv

load_dotenv()

print("URI:", os.getenv('NEO4J_URI'))
print("User:", os.getenv('NEO4J_USERNAME'))
print("Pass:", "***" if os.getenv('NEO4J_PASSWORD') else "MISSING")

try:
    from neo4j import GraphDatabase
    
    driver = GraphDatabase.driver(
        os.getenv('NEO4J_URI'),
        auth=(os.getenv('NEO4J_USERNAME'), os.getenv('NEO4J_PASSWORD'))
    )
    
    driver.verify_connectivity()
    print("SUCCESS: Connected to Neo4j!")
    
    with driver.session() as session:
        result = session.run("RETURN 1 as num")
        print("Query result:", result.single()['num'])
    
    driver.close()
    
except Exception as e:
    print(f"ERROR: {type(e).__name__}")
    print(f"Message: {str(e)}")
    import traceback
    traceback.print_exc()
