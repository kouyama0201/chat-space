# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
# ChatSpace DB設計
## usersテーブル
|Column|Type|Options|
|user_name|string|null: false, add_index|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :masseages
- has_many :groups_users
- has_many :groups, through :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :message

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :groups

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
