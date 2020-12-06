class League < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :contenders
end
