module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b643963a3c0ade6e49ebeb979aded5d4'),
  },
});
