# ChatSpace
グループを作成し、ユーザー同士でメッセージのやりとりが出来るチャットアプリです。

# 機能一覧
* ユーザー登録・ログイン機能(devise)
* メッセージ送信機能(Ajax)
* メッセージ自動更新機能(Ajax)
* グループ作成機能
* グループ編集機能
  - ユーザー検索機能(インクリメンタルサーチ)
* 画像投稿機能(carriewave)
* 単体テスト(RSpec)
* 自動デプロイ(Capistrano)
* Webサーバー(nginx)
* アプリケーションサーバー（unicorn）

# 使用技術
* Ruby 2.5.1
* Ruby on Rails 5.0.7.2
* MySQL 5.6.43
* haml,Sass,jQuery
* Git,GitHub

# ChatSpace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :masseages
- has_many :groups_users
- has_many :groups, through: :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :messages
- has_many :groups_users
- has_many :users, through: :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
