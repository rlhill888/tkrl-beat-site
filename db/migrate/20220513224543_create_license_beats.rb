class CreateLicenseBeats < ActiveRecord::Migration[6.1]
  def change
    create_table :license_beats do |t|
      t.belongs_to :beat, null: false, foreign_key: true
      t.belongs_to :license, null: false, foreign_key: true

      t.timestamps
    end
  end
end
