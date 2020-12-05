class Contender < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  belongs_to :league
end
