class AddMultipleColumnsToBeats < ActiveRecord::Migration[6.1]
  def change
    add_column :beats, :current_deal_sale, :boolean
    add_column :beats, :featured_beats, :boolean
    add_column :beats, :sale_discount_percentage, :integer
    add_column :beats, :instruments, :string
    add_column :beats, :sampled_beat, :boolean
    add_column :beats, :sampled_beat_link, :string
  end
end
