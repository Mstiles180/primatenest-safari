import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

async function testConnection() {
  console.log('Testing database connection...\n');
  
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.error('❌ ERROR: DATABASE_URL is not set in .env file');
    process.exit(1);
  }
  
  console.log('Database URL:', databaseUrl.replace(/:[^:@]+@/, ':****@')); // Hide password
  console.log('');
  
  const pool = new Pool({ 
    connectionString: databaseUrl,
    connectionTimeoutMillis: 10000, // 10 second timeout
  });
  
  try {
    console.log('🔄 Attempting to connect...');
    const client = await pool.connect();
    console.log('✅ Connection successful!');
    
    console.log('\n🔄 Running test query...');
    const result = await client.query('SELECT version()');
    console.log('✅ Query successful!');
    console.log('\nPostgreSQL version:');
    console.log(result.rows[0].version);
    
    client.release();
    await pool.end();
    
    console.log('\n✅ Database connection test passed!');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Database connection failed!');
    console.error('Error details:', error.message);
    
    if (error.code === 'ENOTFOUND') {
      console.error('\n💡 This usually means:');
      console.error('   - The database host cannot be resolved');
      console.error('   - Your Supabase project might be paused');
      console.error('   - The connection string is incorrect');
      console.error('   - Network/DNS issues');
    } else if (error.code === 'ECONNREFUSED') {
      console.error('\n💡 Connection refused - check your host and port');
    } else if (error.message.includes('password authentication failed')) {
      console.error('\n💡 Authentication failed - check your password');
    }
    
    await pool.end();
    process.exit(1);
  }
}

testConnection();
