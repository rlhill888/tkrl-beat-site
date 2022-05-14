class CreateBeats < ActiveRecord::Migration[6.1]
  def change
    create_table :beats do |t|
      t.string :beat_name
      t.string :description
      t.float :mp3_price
      t.float :wav_price
      t.float :track_outs_price
      t.string :genre
      t.string :collaborators

      t.timestamps
    end
  end
end
