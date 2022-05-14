class CreateCartBeats < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_beats do |t|
      t.belongs_to :cart, null: false, foreign_key: true
      t.belongs_to :beat, null: false, foreign_key: true
      t.string :music_file_type
      t.float :price

      t.timestamps
    end
  end
end
