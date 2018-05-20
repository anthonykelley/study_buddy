class Api::CardsController < ApplicationController
  before_action :set_card, only: [:show, :update, :destroy]

  def index
    render json: Card.all
  end

  def show
    render json: @card
  end

  def chapters
    render json: Card.chapters
  end

  def create
    card = Card.new(card_params)
    if card.save
      render json: card
    else render json: { errors: user.errors.full_messages.join(',')   }, status: 422
    end
  end

  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: { errors: @timecard.errors.full_messages.join(',') }, status: 422
    end
  end

  def count
    render json: Card.count
  end

  private

  def set_card
    @card = Card.find(params[:id])
  end

  def card_params
    params.require(:card).permit(:front, :back, :chapter)
  end

end
