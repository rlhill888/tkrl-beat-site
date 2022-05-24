class UserBeatsController < ApplicationController
    def create
        user = User.find(user_beat_params[:user_id])

        all_user_beats= user.user_beats

        all_user_beats.map {|i|
    
    
        if i.beat_id == user_beat_params[:beat_id]
            return render json: {error: 'You already own this beat'}, status: :conflict
        end
        }


        user_beat = UserBeat.create!(user_beat_params)
        render json: user_beat, status: :created
        
    end

    private

    def user_beat_params
        params.permit(:music_file_type, :license_id, :user_id, :beat_id)
    end
end
