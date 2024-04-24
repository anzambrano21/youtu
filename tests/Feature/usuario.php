<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class usuario extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_usuario()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
