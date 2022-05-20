class LicensesController < ApplicationController

    def create
        license = License.create!(license_params)
        render json: license
    end

    def index

    end


    private

    def license_params
        params.permit(:name, :contract_description, :pdf_file)
    end
end
