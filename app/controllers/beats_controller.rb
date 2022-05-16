class BeatsController < ApplicationController

    def index 
        render json: Beat.all
    end


    def create
        beat = Beat.create!(beat_params)
        render json: beat, status: :created
    end

    def show
        render json: find_beat
    end




    private 

    def beat_params
        params.permit(:beat_name, :description, :mp3_price, :wav_price, :track_outs_price, :genre, :collaborators, :albumn_cover)
    end

    def find_beat
        beat=Beat.find(params[:id])
    end
end
