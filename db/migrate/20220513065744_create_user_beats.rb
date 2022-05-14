class CreateUserBeats < ActiveRecord::Migration[6.1]
  def change
    create_table :user_beats do |t|
      t.belongs_to :beat, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :license, null: false, foreign_key: true
      t.string :music_file_type

      t.timestamps
    end
  end
end
