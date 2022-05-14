class CreateStudioSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :studio_sessions do |t|
      t.float :hourly_price
      t.string :session_description
      t.string :session_request_description
      t.string :session_additional_notes
      t.integer :session_time_minutes

      t.timestamps
    end
  end
end
