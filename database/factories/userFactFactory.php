<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\usuario>
 */
class userFactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "nombreUser"=>$this->faker->text(200),
            "email"=>$this->faker->text(200),
            "contraseña"=>$this->faker->text(200),
            
        ];
    }
}
