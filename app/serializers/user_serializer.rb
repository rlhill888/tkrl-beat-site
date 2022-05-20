class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :user_name, :license

  has_one :cart

  def license
    License.all
  end

end
