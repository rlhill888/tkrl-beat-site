class CartBeatsController < ApplicationController

def create
    cart = Cart.find(cart_beats_params[:cart_id])

    all_cart_beats = cart.cart_beats

    all_cart_beats.map {|i| 

    if i.cart_id == cart_beats_params[:cart_id] && i.beat_id == cart_beats_params[:beat_id]
        return render json: {error: 'item is already added to cart'}, status: :conflict
    end


}

    cart_beat = CartBeat.create!(cart_beats_params)
    render json: cart_beat, status: :created
end






private

def cart_beats_params
    params.permit(:cart_id, :beat_id, :license_id, :price, :music_file_type)
end

end
