class Api::CardsController < ApplicationController
  def index
  end

  def create
    card = Card.new(card_params)
    if card.save
      render json: card
    else render json: { errors: user.errors.full_messages.join(',')   }, status: 422
    end
  end

  private

  def card_params
    params.require(:card).permit(:front, :back, :chapter)
  end

end
