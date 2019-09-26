json.id         @message.id
json.content    @message.content 
json.created_at @message.created_at.to_formatted_s(:datetime)
json.user_name  @message.user.name
json.image      @message.image.url