class Card < ApplicationRecord

  def self.chapters
    Card.find_by_sql("
      SELECT DISTINCT
        chapter AS name,
        chapter AS text,
        chapter AS value
      FROM cards
    ")
  end

end
