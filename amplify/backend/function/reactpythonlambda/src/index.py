import json

def handler(event, context):
  print('received event:')
  print(event)
  body = { 
      "message": "Hello from your new Amplify Python lambda!"
    }
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
          'Content-Type': 'application/json'
      },
      'body': json.dumps(body)
  }