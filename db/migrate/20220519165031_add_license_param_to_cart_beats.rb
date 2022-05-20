class AddLicenseParamToCartBeats < ActiveRecord::Migration[6.1]
  def change
    add_column :cart_beats, :license_id, :int
  end
end
