class ContendersController < ApplicationController
  def index
    render json: Contender.first(params[:number])
  end
end
