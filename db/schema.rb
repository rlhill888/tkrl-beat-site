# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_19_165031) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "beats", force: :cascade do |t|
    t.string "beat_name"
    t.string "description"
    t.float "mp3_price"
    t.float "wav_price"
    t.float "track_outs_price"
    t.string "genre"
    t.string "collaborators"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "current_deal_sale"
    t.boolean "featured_beats"
    t.integer "sale_discount_percentage"
    t.string "instruments"
    t.boolean "sampled_beat"
    t.string "sampled_beat_link"
  end

  create_table "cart_beats", force: :cascade do |t|
    t.bigint "cart_id", null: false
    t.bigint "beat_id", null: false
    t.string "music_file_type"
    t.float "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "license_id"
    t.index ["beat_id"], name: "index_cart_beats_on_beat_id"
    t.index ["cart_id"], name: "index_cart_beats_on_cart_id"
  end

  create_table "carts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_carts_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.date "date"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "license_beats", force: :cascade do |t|
    t.bigint "beat_id", null: false
    t.bigint "license_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["beat_id"], name: "index_license_beats_on_beat_id"
    t.index ["license_id"], name: "index_license_beats_on_license_id"
  end

  create_table "licenses", force: :cascade do |t|
    t.string "name"
    t.string "contract_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "studio_session_carts", force: :cascade do |t|
    t.bigint "studio_session_id", null: false
    t.bigint "cart_id", null: false
    t.string "session_request_details"
    t.integer "session_time_requested_minutes"
    t.float "price"
    t.date "requested_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cart_id"], name: "index_studio_session_carts_on_cart_id"
    t.index ["studio_session_id"], name: "index_studio_session_carts_on_studio_session_id"
  end

  create_table "studio_sessions", force: :cascade do |t|
    t.float "hourly_price"
    t.string "session_description"
    t.string "session_request_description"
    t.string "session_additional_notes"
    t.integer "session_time_minutes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "studio_sessions_users", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "studio_session_id", null: false
    t.string "session_details"
    t.integer "session_time_minutes"
    t.string "session_additional_notes"
    t.string "session_request_details"
    t.float "hourly_price"
    t.boolean "completed"
    t.float "full_price"
    t.date "session_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["studio_session_id"], name: "index_studio_sessions_users_on_studio_session_id"
    t.index ["user_id"], name: "index_studio_sessions_users_on_user_id"
  end

  create_table "user_beats", force: :cascade do |t|
    t.bigint "beat_id", null: false
    t.bigint "user_id", null: false
    t.bigint "license_id", null: false
    t.string "music_file_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["beat_id"], name: "index_user_beats_on_beat_id"
    t.index ["license_id"], name: "index_user_beats_on_license_id"
    t.index ["user_id"], name: "index_user_beats_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "user_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "cart_beats", "beats"
  add_foreign_key "cart_beats", "carts"
  add_foreign_key "carts", "users"
  add_foreign_key "license_beats", "beats"
  add_foreign_key "license_beats", "licenses"
  add_foreign_key "studio_session_carts", "carts"
  add_foreign_key "studio_session_carts", "studio_sessions"
  add_foreign_key "studio_sessions_users", "studio_sessions"
  add_foreign_key "studio_sessions_users", "users"
  add_foreign_key "user_beats", "beats"
  add_foreign_key "user_beats", "licenses"
  add_foreign_key "user_beats", "users"
end
