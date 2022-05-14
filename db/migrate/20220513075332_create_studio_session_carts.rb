class CreateStudioSessionCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :studio_session_carts do |t|
      t.belongs_to :studio_session, null: false, foreign_key: true
      t.belongs_to :cart, null: false, foreign_key: true
      t.string :session_request_details
      t.integer :session_time_requested_minutes
      t.float :price
      t.date :requested_date

      t.timestamps
    end
  end
end
