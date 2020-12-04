class CreateLeagues < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :name

      t.timestamps
    end

    add_reference :contenders, :league, foreign_key: true
  end
end
