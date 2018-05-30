﻿namespace EY.Digital.Services.Ordering.API.Application.Queries
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IOrderQueries
    {
        Task<Order> GetOrderAsync(int id);

        Task<IEnumerable<OrderSummary>> GetOrdersAsync();

        Task<IEnumerable<CardType>> GetCardTypesAsync();
    }
}
