<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Events\OrderCreated;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $order = Order::create([
            'product_name' => $request->input('product_name'),
            'quantity' => $request->input('quantity'),
        ]);

        event(new OrderCreated($order));

        return response()->json(['message' => 'Order created successfully']);
    }
}
