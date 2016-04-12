class CreateAeroplanes < ActiveRecord::Migration
  def change
    create_table :aeroplanes do |t|
      t.string :name
      t.string :rows
      t.string :columns

      t.timestamps null: false
    end
  end
end
