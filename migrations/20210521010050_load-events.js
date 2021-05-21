
exports.up = function(knex) {
  return knex.schema.createTable("Event", (table) => {
    table.increments("id");
    table.string("hobby").notNullable();
    table.string("title").notNullable();
    table.string("date");
    table.string("time");
    table.string("location");
    table.string("edited").notNullable();
    table.integer("maxNum");
  }.createTable("Profile", table=>{
      table.increments("id");
      table.string("username").unique().notNullable();
      table.string("email").unique().notNullable();
    })
  .createTable("EventProfile", table =>{
      table.integer("eventID");
      table.integer("profileID");
      table.foreign("eventID").references("Event.id").onDelete("CASCADE");
      table.foreign("profileID").references("Profile.id").onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Event").dropTableIfExists("Profile").dropTableIfExists("EventProfile");
};
