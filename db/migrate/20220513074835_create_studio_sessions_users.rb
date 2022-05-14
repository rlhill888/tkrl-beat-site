class CreateStudioSessionsUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :studio_sessions_users do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :studio_session, null: false, foreign_key: true
      t.string :session_details
      t.integer :session_time_minutes
      t.string :session_additional_notes
      t.string :session_request_details
      t.float :hourly_price
      t.boolean :completed
      t.float :full_price
      t.date :session_date

      t.timestamps
    end
  end
end
