<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    use ApiResponseTrait;

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'string|required',
            'image' => 'image|nullable',
            'email' => 'string|email|required',
            'password' => 'string|required'
        ]);

        $image = $request->image;

        if ($image != null && !$image->getError()) {
            $image = $request->image->store('storage', 'public');
        }

        $user = User::create([
            'name' => $request->name,
            'image' => $image,
            'email' => $request->email,
            'password' => $request->password
        ]);

        $token = auth()->login($user);

        return $this->successResponse(
            [
                'token' => $token,
                'user' => $user
            ],
            'User inscrit avec succés !'
        );
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'string|email|required',
            'password' => 'string|required'
        ]);

        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return $this->unAuthorizdResponse('Login ou mot de passe incorrect !');
        }

        return $this->successResponse(
            [
                'token' => $token,
                'user' => Auth::user()
            ],
            'User connecté avec succés !'
        );

    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

}
