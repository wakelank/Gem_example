class ImMovie < ActiveRecord::Base
  has_many_and_belongs_to :actors
  belongs_to :user
end
