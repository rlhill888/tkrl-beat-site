class LicenseSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :contract_description, :pdf_file

  def pdf_file
    if object.pdf_file.attached?
      {
        url: rails_blob_url(object.pdf_file, only_path: true)
      }
    else
      {
        url: 'tkrl-beat-website/client/src/photos/tkrl_logo_jpeg.png'
      }
    end
   end
end
